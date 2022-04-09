import { it, expect, describe } from "vitest";
import { provinces, districts, communes, villages, all } from "../";

describe("contents of administrative divisions", () => {
  it("all items should contains administrative unit", () => {

    all.forEach((item) => {
      expect(item.unit).toBeTypeOf("object");
    });

    communes.forEach((item) => {
      expect(item.unit).toEqual({
        km: "ឃុំ",
        latin: "Khum",
        en: "Commune",
      });
    });

    provinces.forEach((item) => {
      expect(item.unit).toEqual({
        km: "ខេត្ត",
        latin: "Khaet",
        en: "Province",
      });
    });

    villages.forEach((item) => {
      expect(item.unit).toEqual({
        km: "ភូមិ",
        latin: "Phum",
        en: "Village",
      });
    });

    districts.forEach((item) => {
      expect(item.unit).toEqual({
        km: "ស្រុក",
        latin: "Srok",
        en: "District",
      });
    });
  
  });
});
