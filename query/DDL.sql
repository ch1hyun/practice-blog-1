CREATE USER 'developer'@'%' IDENTIFIED BY 'P!ssw0rd';

GRANT SELECT, UPDATE, DELETE, INSERT
ON *
TO 'developer'@'%';