import { ServiceTypes, Service } from "./models";

const softwareDevelopment = {
  title: "Software Development",
  description:
    "I can develop most software, and if i can't then i can learn how to.\n" +
    "If i have to learn something to develop a product for you, then the rate will we reduced.\n\n" +
    "Things i already have competences to develop:\n" +
    "1. Mobile Apps (cross platform)\n" +
    "2. Websites\n" +
    "3. Cross platform applications (Web Api's, services, console apps, etc.)\n" +
    "4. Windows GUI applications",
  ratePrHourDKK: 200,
};

const pcBuilding = {
  title: "PC Building",
  description:
    "I can build somewhat basic pc's for now, but am open to learn building custom watercooling, at a reduced rate ofcourse.\n" +
    "I can help you choose and source the parts, or you can provide them yourself.",
  ratePrHourDKK: 150,
};

const keyboardBuilding = {
  title: "Custom Keyboard Building",
  description:
    "I offer building keyboards, where i can help you source the parts if you don't wanna do it yourself.\n" +
    "I also offer lubing switches and/or stabilizers of keyboards.",
  ratePrHourDKK: 100,
};

export const GetService = (type: ServiceTypes): Service => {
  switch (type) {
    case ServiceTypes.SoftwareDevelopment:
      return softwareDevelopment;
    case ServiceTypes.PCBuilding:
      return pcBuilding;
    case ServiceTypes.KeyboardBuilding:
      return keyboardBuilding;
  }
};

export const GetServices = (): Service[] => [
  softwareDevelopment,
  pcBuilding,
  keyboardBuilding,
];
