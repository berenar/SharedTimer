export const getCurrentTime = `SELECT shared_time_ms FROM time_counter LIMIT 1`;

export const updateCurrentTime = `UPDATE time_counter SET shared_time_ms = $1 returning shared_time_ms`;
