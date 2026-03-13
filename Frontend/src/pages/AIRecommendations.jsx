import React, { useState } from "react";
import { toast } from "react-hot-toast";
import RecommendedMovies from "../components/RecommendedMovies";
import { getAIRecommendation } from "../lib/AIModel";

const steps = [
  {
    name: "genre",
    label: "What's your favorite genre?",
    options: ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "Animation"],
  },
  {
    name: "mood",
    label: "What's your current mood?",
    options: ["Excited", "Relaxed", "Thoughtful", "Scared", "Inspired", "Romantic"],
  },
  {
    name: "decade",
    label: "Preferred decade?",
    options: ["2020s", "2010s", "2000s", "1990s", "Older"],
  },
  {
    name: "language",
    label: "Preferred language?",
    options: ["English", "Korean", "Spanish", "French", "Other"],
  },
  {
    name: "length",
    label: "Preferred movie length?",
    options: ["Short (<90 min)", "Standard (90-120 min)", "Long (>120 min)"],
  },
];

const initialState = steps.reduce((acc, step) => {
  acc[step.name] = "";
  return acc;
}, {});

const AIRecommendations = () => {

  const [inputs, setInputs] = useState(initialState);
  const [step, setStep] = useState(0);
  const [recommendation, setRecommendation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleOption = (value) => {
    setInputs({
      ...inputs,
      [steps[step].name]: value,
    });
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const generateRecommendations = async () => {

    if (Object.values(inputs).some((v) => !v)) {
      toast.error("Please complete all selections");
      return;
    }

    setIsLoading(true);

    const userPrompt = `Given the following user inputs:

- Decade: ${inputs.decade}
- Genre: ${inputs.genre}
- Language: ${inputs.language}
- Length: ${inputs.length}
- Mood: ${inputs.mood}

Recommend 10 ${inputs.mood.toLowerCase()} ${inputs.language}-language ${inputs.genre.toLowerCase()} movies released in the ${inputs.decade} with runtime ${inputs.length}. 

Return ONLY JSON array of movie titles.

Example:
[
"Movie Title 1",
"Movie Title 2",
"Movie Title 3"
]`;

    let result;

    try {

      result = await getAIRecommendation(userPrompt);

    } catch (error) {

      console.log(error);
      toast.error("AI request failed");
      setIsLoading(false);
      return;

    }

    setIsLoading(false);

    if (!result) {
      toast.error("Failed to get recommendations.");
      return;
    }

    const cleanedResult = result
      .replace(/```json\n/i, "")
      .replace(/\n```/i, "");

    try {

      const recommendationArray = JSON.parse(cleanedResult);

      setRecommendation(recommendationArray);

    } catch (error) {

      console.log("JSON parse error:", error);
      toast.error("Invalid AI response");

    }

  };

  const resetRecommendations = () => {
    setRecommendation([]);
    setInputs(initialState);
    setStep(0);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-[#181818]">

        <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-6"></div>

        <h2 className="text-xl font-semibold">
          AI is generating movie recommendations...
        </h2>

        <p className="text-gray-400 mt-2">
          Please wait a moment 🎬
        </p>

      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#181818] via-[#232323] to-[#181818] relative overflow-hidden">

      {!recommendation.length && (
        <img
          src="/background_banner.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[2px]"
        />
      )}

      {recommendation.length > 0 ? (

        <div className="w-full max-w-7xl mx-auto mt-6 px-4">

          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            🤖 AI Recommended Movies
          </h2>

          <RecommendedMovies movieTitles={recommendation} />

          <div className="flex justify-center mt-10">

            <button
              onClick={resetRecommendations}
              className="bg-[#e50914] px-6 py-3 text-white rounded-lg hover:bg-red-700 transition"
            >
              🔁 Try Again
            </button>

          </div>

        </div>

      ) : (

        <div className="relative w-full max-w-md mx-auto rounded-2xl bg-[#181818]/90 shadow-2xl border border-[#333] px-8 py-10 mt-4 flex flex-col items-center min-h-[480px]">

          <h2 className="text-3xl font-extrabold mb-8 text-center text-white">
            AI Movie Recommendation
          </h2>

          <div className="w-full flex items-center mb-8">

            <div className="flex-1 h-2  bg-[#b6a9a9] rounded-full overflow-hidden">

              <div
                className="h-full bg-[#e50914]  transition-all duration-300"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              ></div>

            </div>

            <span className="ml-4 text-white text-sm font-semibold">
              {step + 1}/{steps.length}
            </span>

          </div>

          <div className="w-full flex flex-col flex-1">

            <div className="mb-6 flex-1">

              <h3 className="text-lg font-semibold text-white mb-6 text-center">
                {steps[step].label}
              </h3>

              <div className="grid grid-cols-1 gap-3">

                {steps[step].options.map((opt) => (

                  <button
                    key={opt}
                    onClick={() => handleOption(opt)}
                    className={`w-full py-3 rounded-xl border-2 transition  text-white font-semibold text-base flex items-center justify-center ${inputs[steps[step].name] === opt
                      ? "bg-[#e50914] border-[#e50914]"
                      : "bg-[#232323] border-[#444] hover:bg-[#e50914]/80"
                      }`}
                  >
                    {opt}
                  </button>

                ))}

              </div>

            </div>

            <div className="flex justify-between items-center mt-6">

              <button
                onClick={handleBack}
                disabled={step === 0}
                className="px-6 py-2 rounded-lg border border-[#444] text-white hover:bg-[#232323]"
              >
                Back
              </button>

              <button
                onClick={step === steps.length - 1 ? generateRecommendations : handleNext}
                disabled={!inputs[steps[step].name]}
                className="px-6 py-2 rounded-lg border border-[#e50914] text-white bg-[#e50914] hover:bg-red-700"
              >
                {step === steps.length - 1 ? "Finish" : "Next"}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default AIRecommendations;