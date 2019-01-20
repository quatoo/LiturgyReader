export function formatDate(d: Date){
    const m_names = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    
    const curr_date = d.getDate();
    const curr_month = d.getMonth();
    const curr_year = d.getFullYear();

    return curr_date + ' de ' + m_names[curr_month] + " de " + curr_year 
}