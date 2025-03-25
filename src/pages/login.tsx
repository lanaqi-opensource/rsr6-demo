import { SimpleUser, useLogin } from '@lanaqi/rsr';

type MyUser = {
  username: string;
};

export default function LoginPage() {
  const login = useLogin<MyUser>(true);
  return (
    <>
      <div className="size-full">
        <button
          type="button"
          onClick={() => {
            let p: string;
            if (Math.round(Math.random() * 100) % 2 === 0) {
              p = 'admin';
            } else if (Math.round(Math.random() * 100) % 3 === 0) {
              p = 'superadmin';
            } else {
              p = 'users';
            }
            login(
              new SimpleUser({
                authenticated: true,
                // permissions: ['users', 'admin'],
                // permissions: ['users'],
                // permissions: ['admin'],
                // permissions: ['superadmin'],
                permissions: [p],
                username: '测试',
              }),
            );
            console.log('执行了登入', p);
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}
