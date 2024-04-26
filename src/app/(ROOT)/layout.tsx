const HomeLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto">{props.children}</main>
    </div>
  );
};

export default HomeLayout;
