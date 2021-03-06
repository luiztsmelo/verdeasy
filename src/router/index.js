import Vue        from 'vue';
import Router     from 'vue-router';

import Plants     from '../app/components/plants/Plants.vue';
import PlantsList from '../app/components/plants/PlantsList.vue';
import Manager    from '../app/components/plants/Manager.vue';
import Sobre      from '../app/components/Sobre.vue';
import Contato    from '../app/components/Contato.vue';
import Blog       from '../app/components/blog/Blog.vue';
import AddBlog    from '../app/components/blog/AddBlog.vue';
import SingleBlog from '../app/components/blog/SingleBlog.vue';


Vue.use(Router);

export const routes = [
  { path: '/',            component: Plants     },
  { path: '*',            component: Plants     },
  { path: '/sobre',       component: Sobre      },
  { path: '/blog',        component: Blog       },
  { path: '/contato',     component: Contato    },
  { path: '/addblog',     component: AddBlog    },
  { path: '/blog/:id',    component: SingleBlog },
  { path: '/plantslist',  component: PlantsList },
  { path: '/minha-horta',  component: Manager   },
];
