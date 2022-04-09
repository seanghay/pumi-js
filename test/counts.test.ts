import { it, expect, describe } from 'vitest'
import { provinces, districts, communes, villages, all } from '../';

describe('count administrative units', () => {

  it('should return 24 provinces', () => {
    expect(25).toBe(provinces.length);
  });

  it("should return 203 districts", () => {
    expect(203).toBe(districts.length);
  });


  it("should return 1,646 communes", () => {
    expect(1646).toBe(communes.length);
  });
  

  it("should return 14,397  villages", () => {
    expect(14397).toBe(villages.length);
  });
  
  it('should return a total of items', () => {
    expect(all.length).toBe(25 + 203 + 1646 + 14397);
  });
  
});