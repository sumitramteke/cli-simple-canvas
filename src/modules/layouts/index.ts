import { prompt, QuestionCollection } from "inquirer"
import { drawCanvas } from "./canvas/canvas.layout";
import { validateCanvas } from "./canvas/canvas.validator";

enum layoutType {
  canvas
}

const layoutQues: QuestionCollection<any> = [
  {
    name: 'layoutType',
    message: 'select layout',
    default: 'canvas',
    type: 'list',
    choices: [
      { name: 'canvas', value: layoutType.canvas }
    ]
  },
  {
    name: 'canvasDimension',
    type: 'input',
    default: '20 10',
    message: 'Enter width and height with space(eg. 20 10)',
    validate: validateCanvas,
    when(answers) {
      return answers.layoutType === layoutType.canvas;
    }
  }
];

const drawLayout = async (
  initialAnswers: Partial<any> | undefined
): Promise<any[][]> => {
  const answers = await prompt(layoutQues, initialAnswers)
  const { layoutType } = answers;
  switch (layoutType) {
    case layoutType.canvas:
    default:
      return drawCanvas(answers.canvasDimension);
  }
};

export { drawLayout };