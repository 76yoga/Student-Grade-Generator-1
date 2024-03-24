function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.3; // 30%
    const nhifRate = 0.05; // 5%
    const nssfRate = 0.06; // 6%
    const grossSalary = basicSalary + benefits;
    const payee = grossSalary*taxRate;
    const nhifDeductions = grossSalary*nhifRate;
    const nssfDeductions = grossSalary*nssfRate;
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    return {
        grossSalary: grossSalary,
        payee: payee,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    }
}