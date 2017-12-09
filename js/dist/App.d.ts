/// <reference types="react" />
import * as React from 'react';
export declare enum AppLocation {
    Home = "Home",
    Offense = "Offense",
    Defense = "Defense",
}
export declare type AppState = {
    appLocation: AppLocation;
};
declare class App extends React.Component<{}, AppState> {
    state: AppState;
    private storeMap;
    private go;
    render(): JSX.Element;
}
export default App;
