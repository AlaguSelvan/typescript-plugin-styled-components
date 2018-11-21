import createTransformer from '../';
import { expectBaselineTransforms } from './expectTransform';

const transformer = createTransformer();

expectBaselineTransforms(transformer, __dirname + '/baselines');
