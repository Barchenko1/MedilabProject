INSERT INTO gender (name) VALUES ('MALE');
INSERT INTO gender (name) VALUES ('FEMALE');

INSERT INTO status (name) VALUES ('CREATED');
INSERT INTO status (name) VALUES ('PENDING');
INSERT INTO status (name) VALUES ('ACTIVE');
INSERT INTO status (name) VALUES ('EXPIRED');
INSERT INTO status (name) VALUES ('DELETED');

INSERT INTO relationship (name) VALUES ('SPOUSE');
INSERT INTO relationship (name) VALUES ('CHILD');

INSERT INTO role (name) VALUES ('ROLE_CUSTOMER');
INSERT INTO role (name) VALUES ('ROLE_INDIVIDUAL');
INSERT INTO role (name) VALUES ('ROLE_EMPLOYEE');

INSERT INTO organizationType (name) VALUES ('PARTNERSHIP');
INSERT INTO organizationType (name) VALUES ('LIMITED LIABILITY COMPANY (LLC)');
INSERT INTO organizationType (name) VALUES ('C-CORP');
INSERT INTO organizationType (name) VALUES ('NONPROFIT');

INSERT INTO productLine (name) VALUES ('MEDICAL');
INSERT INTO productLine (name) VALUES ('DENTAL');
INSERT INTO productLine (name) VALUES ('VISION');
INSERT INTO productLine (name) VALUES ('LIFE');

INSERT INTO class (name) VALUES ('MEDICAL');
INSERT INTO class (name) VALUES ('DENTAL');
INSERT INTO class (name) VALUES ('VISION');
INSERT INTO class (name) VALUES ('LIFE');

INSERT INTO metalTier (name) VALUES ('PLATINUM');
INSERT INTO metalTier (name) VALUES ('GOLD');
INSERT INTO metalTier (name) VALUES ('SILVER');
INSERT INTO metalTier (name) VALUES ('BRONZE');

INSERT INTO type (name) VALUES ('HMO');
INSERT INTO type (name) VALUES ('PPO');

INSERT INTO plan (name, code, monthCost, deductible, class_id, metalTier_id, type_id)
VALUES ("MTRO B GT 450/250", "M1", 250, 450, 1, 1, 1);

INSERT INTO plan (name, code, monthCost, deductible, class_id, metalTier_id, type_id)
VALUES ("MTRO B GT 470/250", "M2", 280, 470, 1, 1, 1);

INSERT INTO plan (name, code, monthCost, deductible, class_id, metalTier_id, type_id)
VALUES ("MTRO B GT 430/220", "M2", 220, 450, 1, 1, 1);