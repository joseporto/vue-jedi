import Jedi from './Jedi'

const VueJedi = {
  install (Vue) {
    Vue.component(Jedi.name, Jedi)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueJedi);
}

export default VueJedi
export {Jedi}

