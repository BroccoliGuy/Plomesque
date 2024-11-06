import flags from './flags';
import baguette from './baguette';
import capitals from './capitals';
import states from './states';
import gradesAAE  from './gradesAAE';
import gradesAT  from './gradesAT';
import gradesAM  from './gradesAM';
import gradesAG  from './gradesAG';
import alphabet  from './alphabet';

// Importation des images de couverture
import flagsCover from './covers/flags.jpg';
import baguetteCover from './covers/baguette.jpg';
import capitalsCover from './covers/capitals.jpg';
import statesCover from './covers/states.jpg';
import gradesATCover from './covers/AT.jpg';
import gradesAMCover from './covers/AM.jpg';
import gradesAAECover from './covers/AAE.jpg';
import gradesAGCover from './covers/AG.jpg';
import alphabetCover from './covers/Alphabet.png';


const allThemes: { [key: string]: { [key: string]: string, cover: string } } = { 
  'Drapeaux du monde': { ...flags, cover: flagsCover },
  'Capitales du monde': { ...capitals, cover: capitalsCover },
  'drapeaux des États et territoires des États-Unis': { ...states, cover: statesCover },
  'alphabet': { ...alphabet, cover: alphabetCover },
  'Baguette3': { ...baguette, cover: baguetteCover },
  'Grades de l\'Armée de terre française': { ...gradesAT, cover: gradesATCover },
  'Grades de la Marine nationale française': { ...gradesAM, cover: gradesAMCover },
  'Grades de l\'Armée de l\'air et de l\'espace française': { ...gradesAAE, cover: gradesAAECover },
  'Grades de la Gendarmerie nationale française': { ...gradesAG, cover: gradesAGCover },
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
