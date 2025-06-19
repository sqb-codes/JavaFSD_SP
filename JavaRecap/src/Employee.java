
// DRY - Do not Repeat Yourself
// S.O.L.I.D
// S - SRP - Single Responsibility Principle
// O - OCP - Open Close Principle
// L - LSP - Liskov Substitution Principle
// I - ISP - Interface Segregation Principle
// D - DIP - Dependency Inversion Principle

// Encapsulation - private variables + public methods
public class Employee {
	
	static int counter;
	private int empId;
	private String empName;
	private String empDept;
	private double empSalary;
	
	public Employee(String empName, String empDept, double empSalary) {
		this.counter++;
		this.empId = counter;
		this.empName = empName;
		this.empDept = empDept;
		this.empSalary = empSalary;
	}
	
	
	public int getEmpId() {
		return empId;
	}



	public void setEmpId(int empId) {
		this.empId = empId;
	}



	public String getEmpName() {
		return empName;
	}



	public void setEmpName(String empName) {
		this.empName = empName;
	}



	public String getEmpDept() {
		return empDept;
	}



	public void setEmpDept(String empDept) {
		this.empDept = empDept;
	}



	public double getEmpSalary() {
		return empSalary;
	}



	public void setEmpSalary(double empSalary) {
		this.empSalary = empSalary;
	}



	public void showEmp() {
		System.out.println(empId);
		System.out.println(empName);
		System.out.println(empDept);
		System.out.println(empSalary);
	}

}
