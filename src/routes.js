import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage404 from '@/modules/core/pages/NotFoundPage404';
import { CharacterPage } from '@/modules/marvel-characters/pages/CharactersPage';
import { SeriesPage } from '@/modules/marvel-characters/pages/SeriesPage';
import { CreatorsPage } from '@/modules/marvel-characters/pages/CreatorsPage';
import { ComicsPage } from '@/modules/marvel-characters/pages/ComicsPage';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<CharacterPage />} />
    <Route exact path="/comics" element={<ComicsPage />} />
    <Route exact path="/creators" element={<CreatorsPage />} />
    <Route exact path="/series" element={<SeriesPage />} />
    <Route element={<NotFoundPage404 />} />
  </Routes>
);

export default AppRoutes;
