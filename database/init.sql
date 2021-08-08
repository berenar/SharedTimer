GRANT ALL PRIVILEGES ON DATABASE sharedtimer TO bernat;

CREATE TABLE IF NOT EXISTS time_counter (
  shared_time_ms BIGINT NOT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  only_one_row_allowed bool PRIMARY KEY DEFAULT TRUE,
  CONSTRAINT only_one_row_allowed_constraint CHECK (only_one_row_allowed)
);

-- The largest integer an INTEGER can store is 2147483647 = 0,07 years
-- The largest integer a BIGINT can store is 9223372036854775807 = 292271023 years

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
  BEFORE UPDATE ON time_counter
  FOR EACH ROW
  EXECUTE PROCEDURE trigger_set_timestamp();

-- Insert one and only row as the time
INSERT INTO time_counter(shared_time_ms) VALUES(0);
