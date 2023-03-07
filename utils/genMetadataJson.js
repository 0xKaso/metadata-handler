const randomNum = require("./randomNum");

function genMetadata(tokenId, isRarity) {
  const valueRange = isRarity ? { min: 80, max: 100 } : { min: 30, max: 100 };

  const healthScore = randomNum(valueRange.min, valueRange.max);
  const magicScore = randomNum(valueRange.min, valueRange.max);
  const intelligenceScore = randomNum(valueRange.min, valueRange.max);
  const totalScore = healthScore + magicScore + intelligenceScore;

  let evaluationScore = "";

  if (totalScore >= 270) {
    evaluationScore = "SSR";
  } else if (totalScore >= 240) {
    evaluationScore = "SR";
  } else if (totalScore >= 210) {
    evaluationScore = "S";
  } else if (totalScore >= 180) {
    evaluationScore = "R";
  } else {
    evaluationScore = "N";
  }

  const metadata = {
    image: `https://chatfi.s3.ap-southeast-1.amazonaws.com/images/${tokenId}.png`,
    name: `Voyager Panda #${tokenId}`,
    tokenId: tokenId,
    external_url: "https://voyagerpanda.com",
    attributes: [
      {
        trait_type: "Health",
        value: healthScore,
      },
      {
        trait_type: "Magic",
        value: magicScore,
      },
      {
        trait_type: "Intelligence",
        value: intelligenceScore,
      },
      {
        trait_type: "Evaluation",
        value: evaluationScore,
      },
      {
        trait_type: "Type",
        value: isRarity ? "Demon Panda" : "Ordinary Panda",
      },
    ],
  };
  return metadata;
}

module.exports = genMetadata;
