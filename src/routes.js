import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage404 from '@/modules/core/pages/NotFoundPage404';
import { CharacterPage } from '@/modules/marvel-characters/pages/CharactersPage';
import { CharactersPage2 } from '@/modules/marvel-characters/pages/CharactersPage2';
import { SeriesPage } from '@/modules/marvel-characters/pages/SeriesPage';
import { CreatorsPage } from '@/modules/marvel-characters/pages/CreatorsPage';
import { ComicsPage } from '@/modules/marvel-characters/pages/ComicsPage';
import { EventsPage } from '@/modules/marvel-characters/pages/EventsPage';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<CharacterPage />} />
    <Route exact path="/characters" element={<CharactersPage2 />} />
    <Route exact path="/comics" element={<ComicsPage />} />
    <Route exact path="/creators" element={<CreatorsPage />} />
    <Route exact path="/events" element={<EventsPage />} />
    <Route exact path="/series" element={<SeriesPage />} />
    <Route element={<NotFoundPage404 />} />
  </Routes>
);

export default AppRoutes;
