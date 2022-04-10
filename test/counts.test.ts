import { it, expect, describe } from 'vitest'
import { provinces, districts, communes, villages, all } from '../';

describe('count administrative units', () => {

  it("should return 25 provinces", () => {
    expect(25).toBe(provinces.length);
  });

  it("should return 197 districts", () => {
    expect(197).toBe(districts.length);
  });


  it("should return 1,646 communes", () => {
    expect(1646).toBe(communes.length);
  });
  

  it("should return 14372  villages", () => {
    expect(14372).toBe(villages.length);
  });
  
  it('should return a total of items', () => {
    expect(all.length).toBe(16240);
  });
  
});