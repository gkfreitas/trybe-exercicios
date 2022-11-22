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

function objectLength(object) {
  return Object.keys(object).length;
}

function objectList(object) {
  return Object.values(object);
}

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {}
};


changeObject(lesson2, 'turno', 'noite');

const allLessonsLength = Object.keys(allLessons).length;
const allObjects = [lesson1, lesson2, lesson3];
for (let i = 1; i <= allLessonsLength; i+= 1) {
  Object.assign(allLessons[`lesson${i}`], allObjects[i - 1]);
}

function getValueByNumber(object, index) {
  return Object.values(object)[index];
}

function verifyPair(object, key, value) {
  
}
