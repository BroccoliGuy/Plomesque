import fruits from './fruits';
import flags from './flags';
import baguette from './baguette';
import capitals from './capitals';
import states from './states';

// Importation des images de couverture
import flagsCover from './covers/flags.jpg';
import fruitsCover from './covers/fruits.jpg';
import baguetteCover from './covers/baguette.jpg';
import capitalsCover from './covers/capitals.jpg';
import statesCover from './covers/states.jpg';

const allThemes: { [key: string]: { [key: string]: string, cover: string } } = { 
  'Drapeaux du monde': { ...flags, cover: flagsCover },
  'Capitales du monde': { ...capitals, cover: capitalsCover },
  'drapeaux des États et territoires des États-Unis': { ...states, cover: statesCover },
  'Fruits': { ...fruits, cover: fruitsCover }, 
  'Baguette2': { ...baguette, cover: baguetteCover },
  'Baguette3': { ...baguette, cover: baguetteCover },
  'Baguette4': { ...baguette, cover: baguetteCover },
  'Baguette5': { ...baguette, cover: baguetteCover },
  'Baguette6': { ...baguette, cover: baguetteCover },
  'Baguette7': { ...baguette, cover: baguetteCover },
  'Baguette8': { ...baguette, cover: baguetteCover },
  'Baguette9': { ...baguette, cover: baguetteCover },
  'Baguette10': { ...baguette, cover: baguetteCover },
  'Baguette11': { ...baguette, cover: baguetteCover },
  'Baguette12': { ...baguette, cover: baguetteCover },
  'Baguette13': { ...baguette, cover: baguetteCover },
  'Baguette14': { ...baguette, cover: baguetteCover },
  'Baguette15': { ...baguette, cover: baguetteCover },
  'Baguette16': { ...baguette, cover: baguetteCover },
  'Baguette17': { ...baguette, cover: baguetteCover },
  'Baguette18': { ...baguette, cover: baguetteCover },
  'Baguette19': { ...baguette, cover: baguetteCover },
  'Baguette20': { ...baguette, cover: baguetteCover },
  'Baguette21': { ...baguette, cover: baguetteCover },
  'Baguette22': { ...baguette, cover: baguetteCover },
  'Baguette23': { ...baguette, cover: baguetteCover },
  'Baguette24': { ...baguette, cover: baguetteCover },
  'Baguette25': { ...baguette, cover: baguetteCover },
  'Baguette26': { ...baguette, cover: baguetteCover },
  'Baguette27': { ...baguette, cover: baguetteCover },
  'Baguette28': { ...baguette, cover: baguetteCover },
  'Baguette29': { ...baguette, cover: baguetteCover },
  'Baguette30': { ...baguette, cover: baguetteCover },


};

export default allThemes;
