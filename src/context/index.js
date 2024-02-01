import { AuctionPostsProvider } from "./auctionPostsContext";
import { BirjaNewsProvider } from "./birjaNewsContext";
import { HerraclarPostsProvider } from "./herraclarPostsContext";
import { OrganizersProvider } from "./organizersContext";
import SettingsProvider from "./settingsContext";


export const Providers = ({ children }) => {
    return (
        <SettingsProvider>
            <OrganizersProvider>
                    <AuctionPostsProvider>
                        <HerraclarPostsProvider>
                             <BirjaNewsProvider>
                                {children}
                            </BirjaNewsProvider>
                        </HerraclarPostsProvider>
                    </AuctionPostsProvider>
            </OrganizersProvider>
        </SettingsProvider>
    );
};