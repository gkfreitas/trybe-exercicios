CREATE TABLE filme (
  filme_id INT NOT NULL AUTO_INCREMENT,
  descricao VARCHAR(100) NOT NULL,
  ano_lancamento INT NOT NULL,
  nota INT,
  PRIMARY KEY (filme_id)
)