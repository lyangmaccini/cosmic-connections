package src.back;

import src.back.server.Server;

public final class Main {

    public static void main(String[] args) {
        new Main(args).run();
    }

    private Main(String[] args) {}

    private void run() {
        new Server();
        System.out.println("Server started; exiting main...");
    }
}