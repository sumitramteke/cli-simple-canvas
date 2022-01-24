import { prompt, QuestionCollection } from "inquirer"
import { drawCanvas } from "./canvas/canvas.layout";
import { validateCanvas } from "./canvas/canvas.validator";

enum layoutType {
  canvas
}

const layoutQues: QuestionCollection<any> = [
  {
    name: 'layoutType',
    type: 'list',
    choices: [
      { name: 'canvas', value: layoutType.canvas }
    ]
  },
  {
    name: 'canvasDimension',
    type: 'input',
    message: 'Enter width and height with space(eg. 5 4)',
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