const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function changeObject(object, key, value) {
  object[key] = value;
}

function listKeys(object) {
  return Object.keys(object);
}

changeObject(lesson2, 'turno', 'noite');

console.log(listKeys(lesson1));
