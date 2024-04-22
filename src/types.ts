export interface Kuliah {
  Id: string;
  Masjid: string;
  Day: string;
  Prayer: string;
  Timing?: string | null;
  Location?: string | null;
  Topic: string;
  Speaker: string;
}
