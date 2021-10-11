import React, { useRef } from 'react';
import { Button, Collapse } from 'antd';
import { Link } from 'react-router-dom';
import style from './info.module.css';
import {
  IntroWrapper, IntroInfoWrapper, Title, InfoTextWrapper, ButtonsWrapper, InfoDivWrapper, AdvicesWrapper,
} from './styles';

const { Panel } = Collapse;
const Info: React.FC = () => {
  const infoDivRef = useRef<HTMLDivElement>(null);

  const executeScroll = (el: React.RefObject<HTMLDivElement>) => {
    if (el.current !== null) {
      el.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <IntroWrapper>
      <div className={style.gradient}>
        <img style={{ height: 'calc(100vh - 67px)', width: '100%', objectFit: 'cover' }} src="https://images.unsplash.com/photo-1611679782010-5ac7ff596d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80" alt="" />
      </div>
      <IntroInfoWrapper>
        <Title>MY CUP OF IT</Title>
        <InfoTextWrapper>
          <p>
            Искать и проходить информационные сoбеседования теперь легко,
            достаточно выбрать собеседника и постучаться!
          </p>
          <ButtonsWrapper>
            <Button><Link to="/users">Выбрать собеседника</Link></Button>
            <Button onClick={() => executeScroll(infoDivRef)}>Узнать больше</Button>
          </ButtonsWrapper>
        </InfoTextWrapper>
      </IntroInfoWrapper>
      <InfoDivWrapper ref={infoDivRef}>
        <h1>Что собой представляет информационное собеседование?</h1>
        <p>
          Информационное собеседование — это неофициальная беседа соискателя с
          профессионалом,
          работающим в соответствующей сфере. Неформальное общение с кем-то,
          кто изнутри знает отрасль,
          нишу, сектор и компанию, которая вас интересует.Очень полезно
          увидеть кратчайший путь к успеху глазами
          опытного профессионала еще до начала поиска работы
        </p>

        <p>
          Информационные собеседования помогут собрать гораздо больше информации.
          Вы сможете получить советы
          относительно той или иной отрасли, лучше понять корпоративную культуру
          потенциального работодателя и
          заложить основу для сети бесценных знакомств, которые будут способствовать
          вашему профессиональному развитию в дальнейшем.
        </p>

        <p>
          Разумеется, нужно будет хорошо подготовиться и проявить профессионализм
          во всем. Ниже описаны шесть
          главных шагов, которые следует выполнить в процессе подготовки
          и проведения информационного собеседования.
        </p>
      </InfoDivWrapper>
      <AdvicesWrapper>
        <Collapse>
          <Panel header="Шаг 1. Вопросы к себе" key="1">
            <p>
              Перед любой встречей или разговором важно определить, какая именно информация вам нужна. Соответственно, информационное собеседование можно назначать лишь после того, как вы ответите себе на следующие вопросы.
              Что я ищу?
              Какая информация мне нужна?
              Какую карьеру я собираюсь построить?
              Подумайте о том, чего вы хотите от своей карьеры. Запишите то, к чему вы пришли. Эти записи будут для вас ориентирами при выполнении следующих шагов.
            </p>
          </Panel>
          <Panel header="Шаг 2. Обращение" key="2">
            <p>
              Теперь попробуйте обратиться к людям из нашего списка. При написании сопроводительного сообщения вашими основными приоритетами должны быть вежливость и профессионализм.
              Объясните человеку, что именно вам нужно и почему вы считаете, что именно этот человек мог бы вам помочь. Уточните, что конкретно вы хотели бы узнать, и попросите уделить вам 15–30 минут.
              Если тот, к кому вы обратились, не готов вам помогать, не отчаивайтесь — переходите к следующему контакту в списке (для этого, собственно, и нужен наш список). Помните о том, что большинству людей будет приятен факт вашего обращения, ведь вы просите у человека совета, а значит, считаете его экспертом в соответствующей области.
            </p>
          </Panel>
          <Panel header="Шаг 3. Планирование встречи" key="3">
            <p>
              На этом этапе нужно продумать программу встречи — приблизительно спланировать ее ход и подготовить вопросы, которые вы будете задавать. Без конкретных, правильно сформулированных вопросов вы не получите результата, даже если ваш собеседник знает все, что вас интересует.
              Попросите собеседника рассказать о себе и о том, почему он или она выбрал или выбрала именно эту отрасль или компанию.
            </p>
          </Panel>
          <Panel header="Шаг 4. Непосредственная подготовка к встрече" key="4">
            <p>
              Время встречи будет ограниченно, поэтому использовать его нужно с максимальной эффективностью, а значит, следует подготовиться. Обязательно возьмите с собой резюме и заготовьте краткое устное описание ваших профессиональных и карьерных целей. Составьте список вопросов, расположив их в порядке убывания важности. Скорее всего, вы не успеете задать все вопросы, поэтому самое важное лучше узнать в самом начале. Затем можете переходить к второстепенным вопросам. Получить ответы на 10 вопросов за 15 минут невозможно, так что начинайте с главного.
              Будьте готовы рассказать о себе — ваш собеседник наверняка спросит, почему вы к нему обратились. Как и ваша устная краткая презентация («речь в лифте»), рассказ о себе должен быть кратким и понятным. Говорите только по существу.
              Этот рассказ может сыграть важную роль. Например, вам могут порекомендовать открытую вакансию, но это не должно быть главной целью встречи. Проанализируйте свои цели, устремления, профессиональные и образовательные достижения и будьте готовы ответить на соответствующие вопросы.
            </p>
          </Panel>
          <Panel header="Шаг 5. Пунктуальность и профессионализм" key="5">
            <p>
              Отбросьте любые отвлекающие мысли, сосредоточьте все свое внимание на настоящем моменте. Дайте понять, что цените время вашего собеседника, — придите не позднее чем за пять минут до назначенного времени, отключите сигнал мобильного телефона, подберите одежду сообразно ситуации. Встреча будет неофициальной, поэтому деловой костюм, скорее всего, не понадобится. Оптимальный минимум — повседневный деловой стиль.
              В ходе разговора будьте внимательны, демонстрируйте заинтересованность.
              Если проработать все вопросы не удалось, попросите порекомендовать кого-то еще, кто мог бы помочь. Также можно попросить разрешения задать оставшиеся вопросы по электронной почте, если ответы действительно очень нужны. Разумеется, все это следует делать с уважением и благодарностью.
            </p>
          </Panel>
          <Panel header="Шаг 6. Действия после встречи" key="6">
            <p>
              Вам уделили драгоценное время. Теперь ваша очередь: выделите время на то, чтобы написать письмо или сообщение с благодарностью. Не забудьте упомянуть, что обязательно воспользуетесь всеми советами и обратитесь ко всем, кого рекомендовал ваш собеседник.
              И самое главное, теперь у вас есть нужная информация — пользуйтесь ею.
              Вы можете организовать информационные собеседования с любым количеством людей, в чем вас никто не ограничивает. Чтобы извлечь максимум из каждой встречи, готовьте и проводите все интервью по описанной выше схеме.
            </p>
          </Panel>
        </Collapse>
      </AdvicesWrapper>

    </IntroWrapper>

  );
};

export default Info;
