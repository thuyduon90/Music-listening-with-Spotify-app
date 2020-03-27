import React from "react";

import Homepage from './pages/HomePageContent';
import ArtistPage from './pages/ArtistPageContent';
import AlbumPage from './pages/AlbumPageContent';
import NotFound from './pages/NotFoundPageContent';


const routes = [
    {
      path: "/",
      exact: true,
      main: ({match}) => <Homepage match={match}></Homepage>
    },
    {
      path: "/artist/:id",
      exact: false,
      main: ({match}) => <ArtistPage match={match}></ArtistPage>
    },
    {
      path: "/album/:id",
      exact: false,
      main: ({match}) => <AlbumPage match={match}></AlbumPage>
    },
    {
      path:'',
      exact:true,
      main: ({match}) => <NotFound match={match}></NotFound>
    }  
  ];
  export default routes;