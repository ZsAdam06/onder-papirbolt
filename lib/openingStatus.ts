interface DaySchedule {
  open: number;
  close: number;
  lunchStart?: number;
  lunchEnd?: number;
}

// Minutes from midnight; must stay in sync with OPENING_HOURS in constants.ts
const WEEKDAY: DaySchedule = { open: 8 * 60, close: 17 * 60, lunchStart: 12 * 60, lunchEnd: 13 * 60 };
const SATURDAY: DaySchedule = { open: 9 * 60, close: 12 * 60 };

const SCHEDULE: (DaySchedule | null)[] = [null, WEEKDAY, WEEKDAY, WEEKDAY, WEEKDAY, WEEKDAY, SATURDAY];

export interface OpenStatus {
  isOpen: boolean;
  label: string;
}

const fmt = (mins: number) => `${String(Math.floor(mins / 60)).padStart(2, '0')}:${String(mins % 60).padStart(2, '0')}`;

export function getOpenStatus(now: Date = new Date()): OpenStatus {
  const schedule = SCHEDULE[now.getDay()];
  const mins = now.getHours() * 60 + now.getMinutes();

  if (!schedule || mins < schedule.open || mins >= schedule.close) {
    return { isOpen: false, label: 'Most zárva' };
  }
  if (schedule.lunchStart !== undefined && mins >= schedule.lunchStart && mins < schedule.lunchEnd!) {
    return { isOpen: false, label: `Ebédszünet ${fmt(schedule.lunchEnd!)}-ig` };
  }
  return { isOpen: true, label: `Nyitva ${fmt(schedule.close)}-ig` };
}

export function getTodayHours(now: Date = new Date()): string {
  const schedule = SCHEDULE[now.getDay()];
  if (!schedule) return 'Ma zárva';
  return `Ma: ${fmt(schedule.open)} – ${fmt(schedule.close)}`;
}
