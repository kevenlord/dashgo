import { Stack } from "@chakra-ui/react";
import { RiContactsBookLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav(){
    return(
        <Stack spacing="12" align="flex-start">
                <NavSection title="GERAL">
                    <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                    <NavLink icon={RiContactsBookLine} href="/users">Usuários</NavLink>    
                </NavSection>
                <NavSection title='AUTOMACAO'>
                    <NavLink icon={RiInputMethodLine} href="/forms">Formulário</NavLink>
                    <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
                </NavSection>
            </Stack>
    );
}