FROM postgres

# ADD ./init-db.sh /docker-entrypoint-initdb.d/
# ADD ./db.dump.sql /db-dumps/

ADD /api/dockerConfig/1_schema.sql /docker-entrypoint-initdb.d
ADD /api/dockerConfig/2_data.sql /docker-entrypoint-initdb.d

RUN chmod a+r /docker-entrypoint-initdb.d/*