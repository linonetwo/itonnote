# 设计哲学

世界上的笔记应用非常多，大多考虑了大众的实际需求。但未来生活节奏很可能会越来越快，咱这个笔记应用不着眼于大众需求，而尝试让使用者能加快生活节奏、注意到除了当前目标还有很多事可以做、让用户没有心理压力地分心、引导用户暂时放弃当前目标以获得更高的灵活性、让用户短时间内能开始很多想做的事情（挖坑不填）、让用户（或其智能代理）费心去诊断问题。


这个笔记系统的受众是天生有 ADHD（注意力游移过度活跃症）的人群，以及高灵视环境下（如克苏鲁氛围）需要防止强迫行为导致的 SAN 值下降的人群。这些人群一般拥有较多的有害知识（顶叶为每个物体提供了非常多的可供性），甚至受过高级的模因学/逆模因训练（能感受到更多的可供性）。只考虑这个小群体的需求的话，这样的笔记系统就有可能在放大认知能力的情况下，依旧保护使用者的心灵不受损害。

## 概念模型

![task model](https://raw.githubusercontent.com/linonetwo/itonnote/master/docs/task%20model.png)

我们的需求被一些监听器听到，它们会帮我们把任务加入当前角色的 todo list，当我们选择一个任务来处理的时候，鼓励用户全身心投入任务，当任务被打断的时候，再去鼓励分治。

在低 SAN 状态下，或者分心导致的快速上下文切换状态下，由于工作记忆的压力比较大，用户会变成糟糕的阅读者，这时阅读是语境驱动的，意思是阅读者会把大脑调整到某种注意定势下（比如思维江化），然后带着这种预期去理解所看到的大段文字，而不会把注意力放在解读每一个词上。

对于每一个任务，我们可以在它结束时链接一个扫尾任务，在上一个任务完成后立即执行，而不进入下一个事件循环（这种在一个事件循环末尾加上的任务叫 micro-task）。这样我们不再需要占用一个短期记忆槽位来记住我们还有一个扫尾任务没做（比如拉上裤链），也不用担心这个扫尾任务要等到过远的未来才会被执行。