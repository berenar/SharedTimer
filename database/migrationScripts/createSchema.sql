CREATE TABLE IF NOT EXISTS time_counter (
  current TIME NOT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  only_one_row_allowed bool PRIMARY KEY DEFAULT TRUE,
  CONSTRAINT only_one_row_allowed_constraint CHECK (only_one_row_allowed)
);

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
INSERT INTO time_counter(current) VALUES('00:00:00');


-- time_counter
-- ----------------------------------------------------
-- | current  |         updated_at         | only_one |
--  ----------+----------------------------+-----------
-- | 00:00:00 | 2021-08-07 01:06:29.327188 | t        |
-- ----------------------------------------------------
-- (1 row)