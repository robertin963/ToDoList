import { Center, VStack, Icon, Button } from "native-base";
import { Text, TextInput, View, FlatList, Alert, Keyboard } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons'

import { THEME } from "../../styles/theme";
import Logo from '../../../assets/logo.svg';
import ClipBoard from "../../../assets/clipboard.svg";


import { styles } from './styles';
import { useState } from "react";

export function Home() {
  const tarefasIniciais = [
    { id: 1, name: 'Inserir outros dados para teste', concluido: false },
    { id: 2, name: 'Criar a Screen com a lista Preenchida', concluido: true },
    { id: 3, name: 'Criar a Screen com a lista Vazia', concluido: true },
    { id: 4, name: 'Importar imagens e padrões de cores do Figma', concluido: true },
    { id: 5, name: 'Iniciar o Projeto utilizando Expo, através do comando npx create-expo-app toDoList --default', concluido: true },
    { id: 6, name: 'Duplicar projeto do Figma', concluido: true },
  ]
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [tarefa, setTarefa] = useState('');
  const [prxId, setPrxId] = useState(7);

  async function handleAddTarefa() {
    if (tarefa.trim().length == 0) {
      return Alert.alert('Erro', 'Tarefa precisa ter dados digitados!!');
    }

    setTarefas(prevState => [{ id: prxId, name: tarefa, concluido: false }, ...prevState]);
    setTarefa('');
    setPrxId(prevState => prevState + 1);
    Keyboard.dismiss();
  }

  function handleDelTarefa(idItem: number) {
    Alert.alert('Atenção', 'Você tem certeza que deseja excluir essa tarefa?', [
      {
        text: 'Sim',
        style: 'default',
        onPress: () => {
          setTarefas(tarefas.filter(task => (task.id !== idItem)));
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleSetFinalizado(idItem: number, status: Boolean) {


    if (status) {
      Alert.alert('Aviso', 'Tem certeza que deseja reabrir uma tarefa já concluída?', [
        {
          text: 'Sim',
          style: 'default',
          onPress: () => {
            setTarefas(tarefas.map(task => {
              if (task.id === idItem) {
                task.concluido = false;
              }
              return task;
            }))
          }
        }, {
          text: 'Não',
          style: 'cancel'
        }
      ])
    } else {
      setTarefas(tarefas.map(task => {
        if (task.id === idItem) {
          task.concluido = true;
        }
        return task;
      }))
    }

  }


  return (
    <VStack style={styles.container}>
      <VStack style={styles.head}>
        <Logo height={30} />
      </VStack>
      <VStack style={styles.body}>
        <View style={styles.context}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={THEME.colors.gray[300]}
            value={tarefa}
            onChangeText={setTarefa}
          />
          <Button
            style={styles.btnAdd}
            bg={THEME.colors.blue['dark']}
            _pressed={{
              bg: THEME.colors.blue['light']
            }}
            onPress={handleAddTarefa}
          >
            <Icon as={AntDesign} name="pluscircleo" color={THEME.colors.gray[100]} />
          </Button>
        </View>
        <View style={styles.countCreated}>
          <VStack style={styles.vstackQtds}>
            <Text style={styles.txtCriada}>Criadas</Text>
            <View style={styles.circuloQtds}>
              <Text style={styles.txtQtds}>{tarefas.length}</Text>
            </View>
          </VStack>
          <VStack style={styles.vstackQtds}>
            <Text style={styles.txtConcluidas}>Concluídas</Text>
            <View style={styles.circuloQtds}>
              <Text style={styles.txtQtds}>{tarefas.filter(item => item.concluido == true).length}</Text>
            </View>
          </VStack>
        </View>
        <View style={tarefas.length === 0 ? styles.separator : ''}></View>
        <VStack>
          <FlatList
            style={styles.flatList}
            data={tarefas}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <VStack style={styles.bodyList}>
                <View style={styles.listCheckBox}>
                  <Button style={styles.listCheckBoxBtn} onPress={() => handleSetFinalizado(item.id, item.concluido)}>
                    {
                      item.concluido ? <Icon as={AntDesign} name="checkcircle" style={styles.iconChecked} /> : <Icon as={Feather} name="circle" style={styles.iconCheck} />
                    }
                  </Button>
                </View>
                <View style={styles.vwListTexto}>
                  <Text style={item.concluido ? styles.listTextoConcluido : styles.listTexto}>{item.name}</Text>
                </View>
                <View style={styles.listbtnExcluir}>
                  <Button style={styles.listDeleteBtn} onPress={() => handleDelTarefa(item.id)} >
                    <Icon as={Feather} name="trash-2" style={styles.iconDelete} />
                  </Button>
                </View>

              </VStack>
            )}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <VStack style={styles.listEmpty}>
                <ClipBoard />
                <Text style={styles.textDark}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.textLight}>Crie tarefas e organize seus itens a fazer</Text>

              </VStack>
            )}
          />
        </VStack>
      </VStack>
    </VStack >
  )

}