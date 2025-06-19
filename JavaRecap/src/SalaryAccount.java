// Relationship
// IS-A - Inheritance
// HAS-A

import java.util.ArrayList;
import java.util.List;

abstract class Account {
	int acc_no;
	public void depositLimit() {
		System.out.println("Deposit Limit is 50000");
	}
	
	public void withdrawLimit() {
		System.out.println("Withdraw Limit is 100000");
	}
	
	abstract void transact();
	
}

class Saving extends Account {
	@Override
	public void depositLimit() {
		System.out.println("Deposit Limit is 100000");
	}

	@Override
	void transact() {
		// TODO Auto-generated method stub
		
	}
	
	void roi() {
		System.out.println("ROI for Saving Account is 7%");
	}
}

class Current extends Account {
	@Override
	public void withdrawLimit() {
		System.out.println("Withdraw Limit is 50000");
	}

	@Override
	void transact() {
		// TODO Auto-generated method stub
		
	}
	
	void minBalance() {
		System.out.println("Minimum balance should be 10000");
	}
}

public class SalaryAccount {
	
	static void caller(Account acc) {
		acc.depositLimit();
		acc.withdrawLimit();
		acc.transact();
		if(acc instanceof Saving) {
			// Downcasting
			Saving savingAcc = (Saving) acc;
			savingAcc.roi();
		} else if(acc instanceof Current) {
			Current currentAcc = (Current) acc;
			currentAcc.minBalance();
		}
	}

	public static void main(String[] args) {
		
		List<String> list = new ArrayList<String>();
		
		// Upcasting
		Account acc = new Saving();
//		acc.depositLimit();		// Parent class method but overridden
//		acc.withdrawLimit();		// Parent class method
		caller(acc);
//		acc.roi();				// Child class method
		
		acc = new Current();
//		acc.depositLimit();		// Parent class method
//		acc.withdrawLimit();		// Parent class method but overridden
		caller(acc);
//		acc.minBalance();		// Child class method
		
//		Saving savingAcc = new Saving();
//		savingAcc.depositLimit();		// Parent class method but overridden
//		savingAcc.withdrawLimit();		// Parent class method
//		savingAcc.roi();				// Child class method
//		
//		Current currentAcc = new Current();
//		currentAcc.depositLimit();		// Parent class method
//		currentAcc.withdrawLimit();		// Parent class method but overridden
//		currentAcc.minBalance();		// Child class method

	}

}
