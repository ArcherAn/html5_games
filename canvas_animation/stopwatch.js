/**
 * Created by Administrator on 2016/7/12.
 */


// ����ʵ�е�����һ��������Կ�ʼ��ֹͣһ����ʱ������Բ��ҳ�����Ѿ����е�ʱ��
// ����ֹͣһ���������� getElapsedTime() �������᷵�ض����ڿ�ʼ�ͽ���֮�����õ�ʱ��
// �����Ҫ���ڶ�ʱ�Ķ���Ч��
Stopwatch = function ()  {                 // ����һ�����Ķ���
};

// You can get the elapsed time while the timer is running, or after it's
// stopped.

Stopwatch.prototype = {                 // �����������Ժͷ���
    startTime: 0,                        // ��ʼʱ��
    running: false,                      // �Ƿ���������
    elapsed: undefined,                  // �Ѿ�������ʱ��

    start: function () {                 // �������ʼ
        this.startTime = +new Date();
        this.elapsedTime = undefined;
        this.running = true;
    },

    stop: function () {
        this.elapsed = (+new Date()) - this.startTime;      // ���㾭����ʱ��
        this.running = false;
    },

    getElapsedTime: function () {          // ���㶯�����е�ʱ�� ����������У�����㵱ǰʹ�õ�ʱ�䣬���ֹͣ�ˣ��򷵻�elapsed
        if (this.running) {
            return (+new Date()) - this.startTime;
        }
        else {
            return this.elapsed;
        }
    },

    isRunning: function() {              // �ж�����Ƿ���������
        return this.running;
    },

    reset: function() {                  // �������
        this.elapsed = 0;
    }
};
