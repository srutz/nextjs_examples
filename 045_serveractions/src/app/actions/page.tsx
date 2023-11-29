"use server"

import { PageContainer } from "@/components/PageContainer"
import { ResultsView } from "./ResultsView"
import { getEmployees } from "./dbactions"

/* 
 test data:

create table employee (id bigserial, name text, salary numeric(31,10), constraint employee_pk primary key (id));
with salary_list AS (select '{1000, 2000, 5000}'::INT[] salary)
 insert into public.employee(id, name, salary) select n, 'Employee ' || n as name, salary[1 + mod(n, array_length(salary, 1))] 
   from salary_list, generate_series(1, 100000) as n;
 */


export default async function Page() {
    const t0 = new Date().getTime()
    const result = await getEmployees()
    const dt = new Date().getTime() - t0;
    console.log("server data fetch tool: " + dt + " ms")

    return (
        <PageContainer>
            <div className="column-container">
                <h1>Server action</h1>
                <div className="column-container">
                    <ResultsView ></ResultsView>
                </div>
            </div>
        </PageContainer>
    )
}

