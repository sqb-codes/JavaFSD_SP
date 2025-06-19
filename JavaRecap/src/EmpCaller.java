
public class EmpCaller {

	public static void main(String[] args) {
		
		Employee obj = new Employee("John", "IT", 45000);
		obj.showEmp();
		
		
		Employee obj_2 = new Employee("Max", "HR", 55000);
		obj_2.showEmp();
		
		System.out.println(obj.getEmpName());

	}


}
