import numpy as np
import tensorflow as tf

import matplotlib.pyplot as plt

import tensorflow_datasets as tfds

from tensorflow import keras
from tensorflow.keras.layers import Dense, Dropout, Bidirectional, LSTM


class AnalysisModel:
    def __init__(self):
        self.data, self.meta = tfds.load(
            'imdb_reviews/subwords8k',
            with_info=True,
            as_supervised=True
        )
        self.train = self.data['train']
        self.test = self.data['test']

        self.encoder = self.meta.features['text'].encoder
        self.pre_process()
        self.build_model()

    def pre_process(self):
        self.BUFFER_SIZE = 10000
        self.BATCH_SIZE = 64
        self.AUTOTUNE = tf.data.AUTOTUNE
        self.train_data = self.train.shuffle(self.BUFFER_SIZE)
        self.train_data = self.train_data.padded_batch(
            self.BATCH_SIZE, padded_shapes=([None], []))
        self.train_data = self.train_data.prefetch(self.AUTOTUNE)
        self.test_data = self.test.padded_batch(
            self.BATCH_SIZE, padded_shapes=([None], []))
        self.embed_layer = keras.layers.Embedding(self.encoder.vocab_size, 64)

    def build_model(self):
        self.model = keras.Sequential([
            self.embed_layer,
            Bidirectional(LSTM(64,
                               dropout=0.5,
                               recurrent_dropout=0.5,
                               return_sequences=True)),
            Bidirectional(LSTM(32,
                               dropout=0.5,
                               recurrent_dropout=0.5,
                               return_sequences=True)),
            Bidirectional(LSTM(16,
                               dropout=0.5,
                               recurrent_dropout=0.5)),
            Dense(64, activation='relu', kernel_regularizer='l2'),
            Dropout(0.5),
            Dense(1, activation='sigmoid')
        ])

    def train(self):
        self.model.compile(
            loss='binary_crossentropy',
            optimizer='adam',
            metrics=['accuracy']
        )
        self.history = self.model.fit(
            self.train_data,
            validation_data=self.test_data,
            epochs=2
        )

    def plot_evaluation(self):
        hist = self.history.history
        plt.plot(hist['loss'])
        plt.plot(hist['val_loss'])
        plt.legend(labels=['Training', 'Validation'])
        plt.xlabel('Epochs')
        plt.ylabel('Loss')
        plt.show()

    def analyse(self, samples):
        sample_encoded = [self.encoder.encode(sample) for sample in samples]
        sample_padded = []
        for s in sample_encoded:
            pad_length = 128 - len(s)
            zeros = [0]*pad_length
            s.extend(zeros)
            s = tf.convert_to_tensor(s)
            sample_padded.append(s)
        sample_padded = tf.convert_to_tensor(sample_padded)
        self.predictions = self.model.predict(sample_padded)
