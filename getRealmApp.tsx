import Realm from "realm";

//let app = Realm.App();

export function getRealmApp() {
    const appID = ""; //need appID
    const appConfig = {
        id: appID,
        timeout: 10000,
        app: {
            name: "default",
            version: "0",
        },
    };
    let app = new Realm.App(appConfig);

    return app;
}