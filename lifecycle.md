Lifecycle
1. 构造函数constructor应该避免复杂的逻辑，他要做的只有：用简单的值对局部变量进行初始化。
2. constructor应该避免复杂的逻辑，Why？：组件创建之前不应该担心它会尝试联系远程服务器。
3. ngOnInit：放置复杂初始化逻辑，eg：组件获取初始数据的好地方。 （like react：componentDidMount）
4. ngOnChanges(changes: SimpleChanges): componentWillReceiveProps(nextProps)
5. 