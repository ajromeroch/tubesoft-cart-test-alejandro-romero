FROM postgres

ADD /api/dockerConfig/1_schema.sql /docker-entrypoint-initdb.d
ADD /api/dockerConfig/2_data.sql /docker-entrypoint-initdb.d

RUN chmod a+r /docker-entrypoint-initdb.d/*