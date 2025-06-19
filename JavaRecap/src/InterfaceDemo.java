interface IPlayer {
	void walk();
	void run();
	void kick();
	void jump();
	default void idle() {
		
	}
}

abstract class CommonPlayer implements IPlayer {

	@Override
	public void walk() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		
	}

	
}

class Eddy extends CommonPlayer implements IPlayer {


	@Override
	public void kick() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void jump() {
		// TODO Auto-generated method stub
		
	}
	
}

class King extends CommonPlayer implements IPlayer {

	@Override
	public void kick() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void jump() {
		// TODO Auto-generated method stub
		
	}
	
}

public class InterfaceDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
