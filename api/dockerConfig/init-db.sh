psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER newuser;
    CREATE DATABASE tubesoft;
    GRANT ALL PRIVILEGES ON DATABASE tubesoft TO newuser;
EOSQL

psql -f /db-dumps/db.dump.sql tubesoft