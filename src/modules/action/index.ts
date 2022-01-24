import { Answers, DistinctQuestion, prompt, QuestionCollection } from "inquirer";
import { drawBucketFill } from './bucketfill/bucketfill.action';
import { validateBucketFill } from "./bucketfill/bucketfill.validator";
import { drawLine } from "./line/line.action";
import { validateLine } from "./line/line.validator";
import { drawRectangle } from "./rectangle/rectangle.action";
import { validateRectangle } from "./rectangle/rectangle.validator";

enum ActionType {
  line = 'line', 
  rectangle = 'rectangle', 
  bucketFill = 'bucketFill'
}

const actionQues: QuestionCollection<Answers> = [
  {
    name: 'actionType',
    type: 'list',
    message: 'What to draw',
    choices: [
      { name: 'line', value: ActionType.line },
      { name: 'rectangle', value: ActionType.rectangle },
      { name: 'bucketFill', value: ActionType.bucketFill },
    ]
  },
  {
    name: 'lineCoordinates',
    type: 'input',
    message: 'Enter x1 y1 x2 y2 coordinate for straight line',
    validate: validateLine,
    when(answers) {
      return answers.actionType === ActionType.line;
    }
  },
  {
    name: 'rectangleCoordinates',
    type: 'input',
    message: 'Enter x1 y1 x2 y2 coordinate for rectangle',
    validate: validateRectangle,
    when(answers) {
      return answers.actionType === ActionType.rectangle;
    }
  },
  {
    name: 'bucketFillArgs',
    message: 'provide coordinate [x y] and character (optional) for bucketFill',
    type: 'input',
    validate: validateBucketFill,
    when(answers) {
      return answers.actionType === ActionType.bucketFill;
    }
  }
];

const getCoordinates = (
  coordinates: string
): number[] => coordinates.split(' ').map(item => Number(item))

const applyAction = async (layout: any[][]): Promise<any[][] | undefined> => {
  const answers = await prompt(actionQues);
  let coordinates: number[];
  switch (String(answers.actionType)) {
    case ActionType.rectangle:
      coordinates = getCoordinates(answers.rectangleCoordinates);
      return drawRectangle(layout, coordinates);
    case ActionType.bucketFill:
      const args = answers.bucketFillArgs.split(' ');
      return drawBucketFill(layout, Number(args[0]), Number(args[1]), args[2]);
    case ActionType.line:
    default:
      coordinates = getCoordinates(answers.lineCoordinates);
      return drawLine(layout, coordinates);
  }
};

export { applyAction };