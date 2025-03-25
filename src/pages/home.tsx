import { useHavePermission } from '@lanaqi/rsr';

export default function HomePage() {
  console.log('HomePage Page');
  const havePermission = useHavePermission();
  return (
    <>
      <div className="size-full">
        <h1>HomePage</h1>
        <hr />
        <button
          disabled={!havePermission('admin')}
          type="button"
          onClick={() => {
            console.log('我是admin权限才可点击');
          }}
        >
          我是admin权限才可点击
        </button>
        <br />
        <button
          disabled={!havePermission(['superadmin'])}
          type="button"
          onClick={() => {
            console.log('我是superadmin权限才可点击');
          }}
        >
          我是superadmin权限才可点击
        </button>
      </div>
    </>
  );
}
