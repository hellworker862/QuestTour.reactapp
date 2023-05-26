import React from 'react'
import {routes} from '../router/index'
import { Navigate, Route, Routes } from "react-router-dom"

function AppRouter() {
  return (
    <Routes>
        {routes.map(route =>
        <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
        />
        )}

    <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  )
}

export default AppRouter