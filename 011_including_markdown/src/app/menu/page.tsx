import { PageContainer } from "@/components/PageContainer";
import { MenuManager } from "@/data/menumanager";
import MenuContainer from "./MenuContainer"

export default function Page() {
    const entries = MenuManager.getInstance().entries;

    return (
        <PageContainer>
            <div className="column-container ">
                <h1>Menü</h1>
                <MenuContainer entries={entries}>
                </MenuContainer>
            </div>
        </PageContainer>
    )
}
